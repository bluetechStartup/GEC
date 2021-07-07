 apiRouter
    .route("/courriers_non_traite_categorie/")
    .get(rapports.courriers_non_traite_categorie);

  apiRouter.route("/courriers_categorie/").get(rapports.courriers_categorie);
