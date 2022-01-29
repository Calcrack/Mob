const { ShardingManager } = require('discord.js');
const mySecret = process.env['token']
const shards = new ShardingManager('./index.js', {
  token: "token",
  totalShards: "auto"
});
shards.on('shardCreate', (shard) => {
   console.log(`shard #${shard.id}`)
});
shards.spawn(shards.totalShards, 1000) 