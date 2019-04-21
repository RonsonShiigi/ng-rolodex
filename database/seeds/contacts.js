exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Bobby Knuckles",
          mobile: "832-321-9382",
          email: "bknuckles@ufc.com"
        },
        {
          name: "StyleBender",
          mobile: "992-433-2310",
          email: "stylebender@ufc.com"
        },
        {
          name: "Dinky Doodoo",
          mobile: "422-903-0386",
          email: "doodoo@gmail.com"
        }
      ]);
    });
};
