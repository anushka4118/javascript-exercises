let findTheOldest = function(people) {
    people.sort((a, b) => { 
        let aLastAlive;
        let bLastAlive;

        if (a.yearOfDeath) {
          aLastAlive = a.yearOfDeath;
        } else {
            aLastAlive = new Date().getFullYear();
        }

        if (b.yearOfDeath) {
            bLastAlive = b.yearOfDeath;
        } else {
            bLastAlive = new Date().getFullYear();
        }

        const previousAge = aLastAlive - a.yearOfBirth;
        const nextAge = bLastAlive - b.yearOfBirth;
        return nextAge - previousAge;
    })  
    
    return people[0];
}

module.exports = findTheOldest
