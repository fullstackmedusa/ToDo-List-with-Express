const skills = [
    {id: 233761, skill: 'HTML'},
    {id: 987672, skill: 'CSS'},
    {id: 765653, skill: 'Javascript'}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function create(skill){
    // add the id

    skill.id = Date.now() % 10000000;
    skills.push(skill);
    console.log(skills, skill, '<--- create function in the models');
  }

  function deleteOne(id){
    // find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

  function getAll() {
    return skills;
  }
  
  function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
  }

  function update(id, skill) {
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    // Ensure the id is copied over
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }