import React from 'react';
import Authorization from '@modules/authorization';
import Registration from '@modules/registration';
import Confirm from '@modules/confirm';
import Desk from '@modules/desk';
import DeskList from '@modules/deskList';
import Loader from '@components/loader/loader';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import store from '@core/store/store';
import { setDeskListLoad } from '@core/store/loadersSlice';

export default function AppRoutes() {
  const isAuth = useSelector((state: RootStateOrAny) =>
    Boolean(state.authUID.value),
  );
  const isMainPageLoad = useSelector(
    (state: RootStateOrAny) => state.loaders.mainPage,
  );

  React.useEffect(() => {
    store.dispatch(setDeskListLoad(false));
  }, [isAuth]);

  return isMainPageLoad ? (
    <Routes>
      {!isAuth
        ? [
            <Route
              key="authorization"
              path="/authorization"
              element={<Authorization />}
            />,
            <Route
              key="registration"
              path="/registration"
              element={<Registration />}
            />,
            <Route key="confirm" path="/confirm" element={<Confirm />} />,
            <Route
              key="redirect-authorization"
              path="*"
              element={<Navigate to="/authorization" />}
            />,
          ]
        : [
            <Route key="desk" path="/desk" element={<Desk />} />,
            <Route key="deskList" path="/deskList" element={<DeskList />} />,
            <Route
              key="authorredirect-deskList"
              path="*"
              element={<Navigate to="/deskList" />}
            />,
          ]}
    </Routes>
  ) : (
    <Loader />
  );
}
