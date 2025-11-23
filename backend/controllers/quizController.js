const QuizResult = require('../models/QuizResult');

exports.save = async (req,res) => {
  try {
    const { answers, recommendedTrek, email } = req.body;
    const q = new QuizResult({ answers, recommendedTrek, email });
    await q.save();
    res.json(q);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

exports.list = async (req,res) => {
  try {
    const items = await QuizResult.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};
