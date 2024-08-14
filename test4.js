const redis  = require('redis-cluser');

async function getLeaderboard(isUserOnboard, userId, points) { //10
 
    if(isUserOnboard) {
        await redis.zadd('leaderboard', points, userId);
    }

    if(points > 0) {
        await redis.zincrBy('leaderboard', points, userId);
    }

    if(points < 0) {
        let [rank, point] = await redis.zrank('leaderboard', userId, 'withsocre');

        await redis.zdecrBy('leaderboard', points, userId);
    }

    let usersInfo = await redis.zrevrange('leaderboard', 0, -1, 'withscores');
    let info = convertObj(usersInfo);

    return {success: true, data: info};
}

// 1. input1 is current leaderboard positions
// 2. input2 is points to be allocated to each userId
// 3. output should be updated leaderboard
