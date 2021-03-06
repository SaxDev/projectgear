const mongoose = require('mongoose');

const serverSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildOwnerID: String,
    guildID: String,
    guildSettings: Array,
    xpData: Array,
    channelData: Array,
    roleRewards: Array
});

module.exports = mongoose.model("Server", serverSchema);
