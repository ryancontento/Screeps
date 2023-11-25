var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {

            let sources = room.find(FIND_SOURCES);
            let used;

            let switchSource = _.random(0, 4) == 0;
            if (Sources.sourcePriority(sources[1]) > Sources.sourcePriority(sources[0])) {
            if (switchSource) {
                used = sources[0];
            } else {
                used = sources[1];
            }
            } else {
            if (switchSource) {
                used = sources[1];
            } else {
                used = sources[0];
            }

            creep.moveTo(sources[used], {visualizePathStyle: {stroke: '#ffaa00'}});
}
            // var sources = creep.room.find(FIND_SOURCES);
            // if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            // }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && 
                                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;