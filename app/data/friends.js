const friendTable = [
  {
    name: "Steve",
    photo:
      "https://vignette.wikia.nocookie.net/familymatters/images/8/8f/Steve_Urkel_posing.jpg/revision/latest?cb=20170308034914",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Lucy",
    photo:
      "https://amp.businessinsider.com/images/53de9d606bb3f70125e5f783-750-456.jpg",
    scores: [3, 5, 4, 1, 3, 2, 5, 1, 3, 2]
  }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendTable;
