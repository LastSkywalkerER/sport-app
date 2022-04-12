import React from 'react';
import useQuery from '@core/hook/useQuery';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import {
  addColumnToDb,
  changeDeskTitleOnDb,
} from '@core/services/firebase/deskManager';
import { useModals } from '@core/hook/modalsController';
import { modalsNames } from '@components/modals';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import {
  addColumn,
  changeDeskTitle,
  getDesk,
  handleCardsReordering,
  handleColumnsReordering,
} from '@core/store/actions';
import Loader from '@components/loader/loader';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import ColumnItem from './components/columnItem/columnItem';
import ColumnInterface from '@core/models/Column';
import useStyles from '@modules/desk/deskStyle';

export default function Desk(): JSX.Element {
  const idDesk = useQuery().get('id') || '';
  const userName = useQuery().get('userName') || '';
  const desk = useSelector((state: RootStateOrAny) => state.desk);
  const isDeskLoad = useSelector((state: RootStateOrAny) => state.loaders.desk);
  const isColumnLoad = useSelector(
    (state: RootStateOrAny) => state.loaders.column,
  );
  const { openModal } = useModals();
  const {
    container,
    deskWrapper,
    titleWrapper,
    iconMargin,
    deskField,
    columnsWrapper,
    addColumnBtn,
    deskTitle,
  } = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDesk(idDesk, userName));
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      dispatch(handleColumnsReordering(result));
      return;
    }

    dispatch(handleCardsReordering(result));
  };

  const handleDeskTitleEdit = () =>
    openModal(modalsNames.EDIT_DIALOG, {
      extString: desk.title,
      action: (title: string) => {
        dispatch(changeDeskTitle(title, idDesk));
      },
    });

  const handleNewColumn = () => {
    openModal(modalsNames.EDIT_DIALOG, {
      extString: 'New Column',
      action: (title: string) => {
        dispatch(addColumn(title));
      },
    });
  };

  return isDeskLoad ? (
    <Container maxWidth="xl" sx={container}>
      <Box sx={deskWrapper}>
        <Box sx={titleWrapper}>
          <IconButton
            sx={iconMargin}
            edge="end"
            aria-label="edit"
            onClick={handleDeskTitleEdit}
          >
            <EditIcon />
          </IconButton>
          <Typography sx={deskTitle} variant="h5" component="div">
            {`${desk.title}`}
          </Typography>
        </Box>
        <Box component="div" sx={deskField}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId={idDesk}
              direction="horizontal"
              type="column"
            >
              {(provided) => (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={columnsWrapper}
                >
                  {desk.columns.map((column: ColumnInterface) =>
                    column.title !== '' ? (
                      <ColumnItem
                        key={column.id}
                        column={column}
                        isLoaded={true}
                      />
                    ) : null,
                  )}
                  {isColumnLoad ? <ColumnItem key={0} /> : null}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>
          <Button
            sx={addColumnBtn}
            variant="contained"
            onClick={handleNewColumn}
          >
            Add{'\u00a0'}column
          </Button>
        </Box>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
}
