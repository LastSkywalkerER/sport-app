import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useModals } from '@core/hook/modalsController';
import { modalsNames } from '@components/modals';
import {
  addDeskToDb,
  removeDeskFromDb,
} from '@core/services/firebase/deskManager';
import Loader from '@components/loader/loader';
import { addDesk, getDeskList, removeDesk } from '@core/store/actions';

import { DeskListInterface } from '@core/models/DeskList';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Button } from '@mui/material';
import useStyles from '@modules/deskList/deskListStyle';

export default function DeskList(): JSX.Element {
  const deskList = useSelector((state: RootStateOrAny) => state.deskList.desks);
  const userName = useSelector((state: RootStateOrAny) => state.userName.value);
  const isDeskListLoad = useSelector(
    (state: RootStateOrAny) => state.loaders.deskList,
  );
  const isDeskItemLoad = useSelector(
    (state: RootStateOrAny) => state.loaders.deskItem,
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { openModal } = useModals();
  const { listBox, listWrapper, addDeskBtn, list, listItem } = useStyles();

  React.useEffect(() => {
    dispatch(getDeskList());
  }, []);

  const listItemHandler = (
    id: string,
    event: React.MouseEvent<HTMLElement>,
  ): void => {
    if (event.target instanceof Element) {
      if (!event.target.closest('button')) {
        navigate({
          pathname: `/desk`,
          search: `?${createSearchParams({
            id,
            userName,
          })}`,
        });
      }
    }
  };

  const handleNewDesk = () => {
    openModal(modalsNames.EDIT_DIALOG, {
      extString: 'New Desk',
      action: (title: string) => {
        dispatch(addDesk(title));
      },
    });
  };

  const handleDeleteDesk = (id: string) => {
    dispatch(removeDesk(id));
  };

  return (
    <Box component="div" sx={listBox}>
      <Paper elevation={1} sx={listWrapper}>
        <Button sx={addDeskBtn} variant="contained" onClick={handleNewDesk}>
          Add{'\u00a0'}desk
        </Button>
        {isDeskListLoad ? (
          <List sx={list}>
            {deskList.map(({ title, id }: DeskListInterface) => (
              <ListItem
                key={id}
                onClick={listItemHandler.bind(undefined, id)}
                sx={listItem}
                secondaryAction={
                  <IconButton
                    onClick={handleDeleteDesk.bind(undefined, id)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <AnalyticsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} />
              </ListItem>
            ))}
            {isDeskItemLoad ? <Loader /> : null}
          </List>
        ) : (
          <Loader />
        )}
      </Paper>
    </Box>
  );
}
