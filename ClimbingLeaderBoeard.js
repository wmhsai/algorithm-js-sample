function ClimbingLeaderBoeard(Ranked, Player) {
    const uniqRanked = [...new Set(Ranked)]
    let uniqRankedLength = uniqRanked.length;
    const result = []
    for (let i = 0; i < Player.length; i++) {
        const playerScore = Player[i]
        while (uniqRankedLength >= 1 && playerScore >= uniqRanked[uniqRankedLength -1]) {
            uniqRankedLength--;
        }
        result.push(uniqRankedLength + 1)
    }
    return result
}

console.log(ClimbingLeaderBoeard([100, 80, 80, 20], [40, 60, 110]), "Dense Ranking player");
6