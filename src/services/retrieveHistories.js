const { Firestore } = require("@google-cloud/firestore");

async function retrieveHistories() {
  const db = new Firestore();

  const predictCollection = db.collection("prediction");
  const snapshot = await predictCollection.get();

  if (snapshot.empty) {
    return [];
  }

  const histories = [];
  snapshot.forEach((doc) => {
    histories.push(doc.data());
  });

  return histories;
}

module.exports = retrieveHistories;