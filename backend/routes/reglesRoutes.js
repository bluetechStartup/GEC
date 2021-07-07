 apiRouter.route("/regle/").post(regles.add);

  apiRouter.route("/regle/:id").put(regles.edit);

  apiRouter.route("/regle/:id").get(regles.one);
  apiRouter.route("/regle/").get(regles.all);

  apiRouter.route("/regle/:id").delete(regles.remove);
  apiRouter.route("/regle/:id").delete(regles.removeByCategory);