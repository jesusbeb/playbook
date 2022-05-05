class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        //return explorersByMission
        console.log(explorersByMission)
    }/*
    static getAmountofExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.lenght;
    }

    static getExplorersUsernamesByMission(explorers,mission){
        const explorersByMission = ExplorerService.filterByMission(explorer, mission);
        const explorerUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorerUsernames;
    }*/
}
module.exports = ExplorerService