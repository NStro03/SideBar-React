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
        isSideBarOpen: isSideBarOpen,
        isModalOpen: isModalOpen,
        openSideBar: openSideBar,
        closeSideBar: closeSideBar,
        openModal: openModal,
        closeModal: closeModal

    }

    return <AppContext.Provider value={appValues}>{children}</AppContext.Provider>
}
