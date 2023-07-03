import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/common';
import { authActions } from '../../store/authSlice';

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleOnBtnLogoutClicked = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <header className="sticky top-0 z-10 bg-white py-2.5 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active flex items-center gap-2"
          >
            <img
              className="ml-[5px] w-8 flex-none"
              src="/logo512.svg"
              alt="logo512"
            />
            <span className="text-3xl font-bold">Funny Video</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://1.envato.market/Jzb2Vq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
            >
              <span className="hidden md:block">Purchase Now</span>
            </a>
            <a
              href="/register"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-secondary"
            >
              <span className="hidden md:block">Documentation</span>
            </a>
            <a
              href="/login"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {user ? (
                <span
                  className="hidden md:block"
                  onClick={handleOnBtnLogoutClicked}
                >
                  Log Out
                </span>
              ) : (
                <span className="hidden md:block">Log In</span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
