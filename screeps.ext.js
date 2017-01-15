// Node.js Hot-fixes

/**
 * @const
 */
var process = {
    argv: {},
    argc: {}
};

/**
 * @type {Object}
 */
var module = {
    exports: {}
};


// Actual Screeps API

/**
 * @type {Object}
 */
var Memory = {};

/**
 * @const
 */
var Game = {
    creeps: {},
    spawns: {}
};

var Creep = function() {
    /**
     * @type {Array<Object>}
     */
    this.body = [{
        boost: {},
        type: {},
        hits: {}
    }];

    this.carry = {
        energy: {}
    };

    this.carryCapacity = {};

    /**
     * @type {RoomPosition}
     */
    this.pos = {};
};
Creep.prototype.attack = function(target) {};
Creep.prototype.attackController = function(target) {};
Creep.prototype.build = function(target) {};
Creep.prototype.cancelOrder = function(methodName) {};
Creep.prototype.claimController = function(target) {};
Creep.prototype.dismantle = function(target) {};
Creep.prototype.drop = function(resourceType, amount) {};
Creep.prototype.generateSafeMode = function(controller) {};
Creep.prototype.getActiveBodyparts = function(type) {};
Creep.prototype.harvest = function(target) {};
Creep.prototype.heal = function(target) {};
Creep.prototype.move = function(direction) {};
Creep.prototype.moveByPath = function(path) {};
Creep.prototype.moveTo = function(target) {};
Creep.prototype.notifyWhenAttacked = function(enabled) {};
Creep.prototype.pickup = function(target) {};
Creep.prototype.rangedAttack = function(target) {};
Creep.prototype.rangedHeal = function(target) {};
Creep.prototype.rangedMassAttack = function() {};
Creep.prototype.repair = function(target) {};
Creep.prototype.reserveController = function(target) {};
Creep.prototype.say = function(message, isPublic) {};
Creep.prototype.signController = function(target, text) {};
Creep.prototype.suicide = function() {};
Creep.prototype.transfer = function(target, resourceType, amount) {};
Creep.prototype.upgradeController = function(target) {};
Creep.prototype.withdraw = function(target, resourceType, amount) {};

var RoomPosition = function() {};
RoomPosition.prototype.findClosestByRange = function(type, opts) {};
