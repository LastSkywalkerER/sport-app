import React from 'react';
import { useModals } from '@core/hook/modalsController';
import { modalsNames } from '@components/modals';
import {
  changeColumnTitleOnDb,
  removeColumnFromDb,
  addCardToDb,
} from '@core/services/firebase/deskManager';
import { addCard, changeColumnTitle, removeColumn } from '@core/store/actions';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@emotion/react';
import useStyles from '@modules/desk/components/columnItem/columnItemStyle';

import CardItem from '../cardItem/cardItem';
import ColumnInterface from '@core/models/Column';
import CardInterface from '@core/models/Card';
import Loader from '@components/loader/loader';

interface props {
  column?: ColumnInterface;
  isLoaded?: boolean;
}

export default function ColumnItem({
  column = { title: '', id: '', cards: [], order: 0 },
  isLoaded = false,
}: props) {
  const { openModal } = useModals();
  const {
    columnCard,
    cardContent,
    cardHeader,
    iconBtn,
    innerCard,
    addCardBtn,
  } = useStyles();
  const dispatch = useDispatch();

  const handleEditColumnTitle = () =>
    openModal(modalsNames.EDIT_DIALOG, {
      extString: column.title,
      action: (title: string) => {
        dispatch(changeColumnTitle(title, column.id));
      },
    });

  const handleDeleteColumn = () => dispatch(removeColumn(column.id));

  const handleAddCard = () => {
    openModal(modalsNames.EDIT_DIALOG, {
      extString: 'New Card',
      action: (text: string) => {
        dispatch(addCard(text, column.id));
      },
    });
  };

  return (
    <Draggable draggableId={column.id} index={column.order}>
      {(provided) => (
        <Card
          {...provided.draggableProps}
          ref={provided.innerRef}
          sx={columnCard}
        >
          <CardContent>
            <Box {...provided.dragHandleProps} sx={cardContent}>
              <Box sx={cardHeader}>
                <IconButton
                  sx={iconBtn}
                  edge="end"
                  aria-label="edit"
                  onClick={handleEditColumnTitle}
                >
                  {isLoaded ? <EditIcon /> : null}
                </IconButton>
                <Typography variant="body1" component="div">
                  {isLoaded ? `${column.title}` : ''}
                </Typography>
              </Box>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleDeleteColumn}
              >
                {isLoaded ? <CloseIcon /> : null}
              </IconButton>
            </Box>
            {isLoaded ? null : <Loader />}
            <Droppable droppableId={column.id} type="card">
              {(provided) => (
                <Box
                  sx={innerCard}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.cards.map((card: CardInterface, index: number) => (
                    <CardItem
                      key={card.id}
                      text={card.text}
                      idCard={card.id}
                      idCol={column.id}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </CardContent>
          <CardActions>
            {isLoaded ? (
              <Button sx={addCardBtn} size="small" onClick={handleAddCard}>
                + add card
              </Button>
            ) : null}
          </CardActions>
        </Card>
      )}
    </Draggable>
  );
}
