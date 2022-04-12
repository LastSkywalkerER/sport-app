import React from 'react';
import { useModals } from '@core/hook/modalsController';
import { modalsNames } from '@components/modals';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import useStyles from '@modules/desk/components/cardItem/cardItemStyle';
import { changeCardText, removeCard } from '@core/store/actions';

interface props {
  text: string;
  idCard: string;
  idCol: string;
  index: number;
}

export default function CardItem({ text, idCard, idCol, index }: props) {
  const { openModal } = useModals();
  const { card, cardTontent, iconButton } = useStyles();
  const dispatch = useDispatch();

  const handleEditCard = () => {
    openModal(modalsNames.EDIT_DIALOG, {
      extString: text,
      action: (newText: string) => {
        dispatch(changeCardText(newText, idCol, idCard));
      },
    });
  };

  const handleDeleteCard = () => {
    dispatch(removeCard(idCol, idCard));
  };

  return (
    <Draggable draggableId={idCard} index={index}>
      {(provided) => (
        <Card
          sx={card}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardContent sx={cardTontent}>
            <IconButton
              sx={iconButton}
              edge="end"
              aria-label="edit"
              onClick={handleEditCard}
            >
              <EditIcon />
            </IconButton>
            <Typography variant="body2">{`${text}`}</Typography>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={handleDeleteCard}
            >
              <CloseIcon />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}
