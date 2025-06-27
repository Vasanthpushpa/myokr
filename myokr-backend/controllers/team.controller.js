import Team from '../models/Team.js';

export const createTeam = async (req, res) => {
  const { name, department, members = [] } = req.body;

  try {
    const team = await Team.create({
      name,
      department,
      members
    });

    res.status(201).json(team);
  } catch (error) {
    console.error('Error creating team:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('department').populate('members');
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    console.error('Error deleting team:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
