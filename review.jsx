const openRemoveItemModal = (card) => {
    setSelectedCard(card);
    setIsRemoveItemModalOpen(true);
  };
  const closeRemoveItemModal = () => setIsRemoveItemModalOpen(false);

  const handleCardClick = (card) => {
    console.log("Clicked card:", card);
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteClick = (card) => {
    console.log("handleDeleteClick called with card:", card);
    setSelectedCard(card);
    openRemoveItemModal(card);
  };
  
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const changeCurrentUserData = (username, avatar) => {
    setActiveModal("Edit-profile");
    console.log("clicked");
  };

  const openRegisterModal = () => {
    console.log("Opening register modal");
    setActiveModal("register");
  };
