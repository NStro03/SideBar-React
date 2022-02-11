import React, { useState, useContext } from 'react'
export const AppContext = React.createContext(null);

export default ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => {
        setIsSideBarOpen(true);
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const appValues = {
        isSideBarOpen,
        isModalOpen,
        openSideBar,
        closeSideBar,
        openModal,
        closeModal
    }

    return <AppContext.Provider value={appValues}>{children}</AppContext.Provider>
}
// Can also wxport the below function to reduce the redundant code for accessing the useContext object.
// export const useGlobalContext = () => {
//     return useContext(AppContext);
//   };
