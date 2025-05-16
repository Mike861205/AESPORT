import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Team, Match, Standing, Player } from "@/types";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/useTranslation";
import { ArrowRight, Trophy, Calendar, Award, TrendingUp } from "lucide-react";

interface TournamentTabsProps {
  teams: Team[];
  matches: Match[];
  standings: Standing[];
  goalScorers: Player[];
  assists: Player[];
}

const TournamentTabs = ({
  teams,
  matches,
  standings,
  goalScorers,
  assists,
}: TournamentTabsProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("teams");
  const [teamCategory, setTeamCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [standingsCategory, setStandingsCategory] = useState("2013");
  const [statisticsCategory, setStatisticsCategory] = useState("2013");

  // Filter teams by category
  const filteredTeams = teams.filter(
    (team) => teamCategory === "all" || team.category === teamCategory
  );

  // Filter matches by date
  const filteredMatches = matches.filter(
    (match) => dateFilter === "all" || match.date === dateFilter
  );

  // Get unique dates for filter
  const uniqueDates = [...new Set(matches.map((match) => match.date))];

  // Filter standings by category
  const filteredStandings = standings.filter(
    (standing) => standing.category === standingsCategory
  );

  // Filter goalscorers by category
  const filteredGoalScorers = goalScorers.filter(
    (player) => player.category === statisticsCategory
  );

  // Filter assists by category
  const filteredAssists = assists.filter(
    (player) => player.category === statisticsCategory
  );

  return (
    <div className="tournament-tabs">
      <Tabs
        defaultValue="teams"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-100 rounded-lg p-1">
          <TabsTrigger
            value="teams"
            className="flex items-center gap-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            <Trophy className="h-4 w-4" />
            <span>{t("teams")}</span>
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="flex items-center gap-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            <Calendar className="h-4 w-4" />
            <span>{t("schedule")}</span>
          </TabsTrigger>
          <TabsTrigger
            value="standings"
            className="flex items-center gap-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            <Award className="h-4 w-4" />
            <span>{t("standings")}</span>
          </TabsTrigger>
          <TabsTrigger
            value="statistics"
            className="flex items-center gap-1 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
          >
            <TrendingUp className="h-4 w-4" />
            <span>{t("statistics")}</span>
          </TabsTrigger>
        </TabsList>

        {/* Teams Tab Content */}
        <TabsContent value="teams" className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="team-category"
              className="block mb-2 font-medium"
            >
              {t("selectCategory")}
            </label>
            <Select
              value={teamCategory}
              onValueChange={(value) => setTeamCategory(value)}
            >
              <SelectTrigger className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder={t("allCategories")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("allCategories")}</SelectItem>
                <SelectItem value="2018">{t("cat2018")}</SelectItem>
                <SelectItem value="2017">{t("cat2017")}</SelectItem>
                <SelectItem value="2016">{t("cat2016")}</SelectItem>
                <SelectItem value="2015">{t("cat2015")}</SelectItem>
                <SelectItem value="2014">{t("cat2014")}</SelectItem>
                <SelectItem value="2013">{t("cat2013")}</SelectItem>
                <SelectItem value="2012">{t("cat2012")}</SelectItem>
                <SelectItem value="2011">{t("cat2011")}</SelectItem>
                <SelectItem value="2010">{t("cat2010")}</SelectItem>
                <SelectItem value="2009">{t("cat2009")}</SelectItem>
                <SelectItem value="2008">{t("cat2008")}</SelectItem>
                <SelectItem value="libre">{t("catLibre")}</SelectItem>
                <SelectItem value="mamafut">{t("catMamaFut")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTeams.map((team) => (
              <div
                key={team.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">{t("team")}</span>
                    <span className="font-bold">{team.id}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-montserrat font-semibold text-lg">
                    {team.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("category")}: {team.category === "2018"
                      ? t("cat2018")
                      : team.category === "2017"
                      ? t("cat2017")
                      : team.category === "2016"
                      ? t("cat2016")
                      : team.category === "2015"
                      ? t("cat2015")
                      : team.category === "2014"
                      ? t("cat2014")
                      : team.category === "2013"
                      ? t("cat2013")
                      : team.category === "2012"
                      ? t("cat2012")
                      : team.category === "2011"
                      ? t("cat2011")
                      : team.category === "2010"
                      ? t("cat2010")
                      : team.category === "2009"
                      ? t("cat2009")
                      : team.category === "2008"
                      ? t("cat2008")
                      : team.category === "libre"
                      ? t("catLibre")
                      : team.category === "mamafut"
                      ? t("catMamaFut")
                      : team.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("location")}: {team.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button variant="default" className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-accent transition-colors">
              {t("viewAllTeams")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* Schedule Tab Content */}
        <TabsContent value="schedule" className="mt-6">
          <div className="mb-4">
            <label htmlFor="date-filter" className="block mb-2 font-medium">
              {t("selectDay")}
            </label>
            <Select
              value={dateFilter}
              onValueChange={(value) => setDateFilter(value)}
            >
              <SelectTrigger className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder={t("allDays")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("allDays")}</SelectItem>
                {uniqueDates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {date}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-primary text-white uppercase text-sm">
                  <th className="py-3 px-4 text-left">{t("day")}</th>
                  <th className="py-3 px-4 text-left">{t("time")}</th>
                  <th className="py-3 px-4 text-left">{t("category")}</th>
                  <th className="py-3 px-4 text-left">{t("match")}</th>
                  <th className="py-3 px-4 text-left">{t("venue")}</th>
                  <th className="py-3 px-4 text-left">{t("status")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredMatches.map((match) => (
                  <tr key={match.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{match.date}</td>
                    <td className="py-3 px-4">{match.time}</td>
                    <td className="py-3 px-4">
                      {match.category === "2018"
                        ? t("cat2018")
                        : match.category === "2017"
                        ? t("cat2017")
                        : match.category === "2016"
                        ? t("cat2016")
                        : match.category === "2015"
                        ? t("cat2015")
                        : match.category === "2014"
                        ? t("cat2014")
                        : match.category === "2013"
                        ? t("cat2013")
                        : match.category === "2012"
                        ? t("cat2012")
                        : match.category === "2011"
                        ? t("cat2011")
                        : match.category === "2010"
                        ? t("cat2010")
                        : match.category === "2009"
                        ? t("cat2009")
                        : match.category === "2008"
                        ? t("cat2008")
                        : match.category === "libre"
                        ? t("catLibre")
                        : match.category === "mamafut"
                        ? t("catMamaFut")
                        : match.category}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span className="font-medium">{match.teamA}</span>
                        <span className="mx-2">vs</span>
                        <span className="font-medium">{match.teamB}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{match.venue}</td>
                    <td className="py-3 px-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs py-1 px-2 rounded-full">
                        {t("scheduled")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <Button variant="default" className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-accent transition-colors">
              {t("viewFullSchedule")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* Standings Tab Content */}
        <TabsContent value="standings" className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="standings-category"
              className="block mb-2 font-medium"
            >
              {t("selectCategory")}
            </label>
            <Select
              value={standingsCategory}
              onValueChange={(value) => setStandingsCategory(value)}
            >
              <SelectTrigger className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder={t("cat2013")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2018">{t("cat2018")}</SelectItem>
                <SelectItem value="2017">{t("cat2017")}</SelectItem>
                <SelectItem value="2016">{t("cat2016")}</SelectItem>
                <SelectItem value="2015">{t("cat2015")}</SelectItem>
                <SelectItem value="2014">{t("cat2014")}</SelectItem>
                <SelectItem value="2013">{t("cat2013")}</SelectItem>
                <SelectItem value="2012">{t("cat2012")}</SelectItem>
                <SelectItem value="2011">{t("cat2011")}</SelectItem>
                <SelectItem value="2010">{t("cat2010")}</SelectItem>
                <SelectItem value="2009">{t("cat2009")}</SelectItem>
                <SelectItem value="2008">{t("cat2008")}</SelectItem>
                <SelectItem value="libre">{t("catLibre")}</SelectItem>
                <SelectItem value="mamafut">{t("catMamaFut")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-primary text-white uppercase text-sm">
                  <th className="py-3 px-4 text-left">{t("pos")}</th>
                  <th className="py-3 px-4 text-left">{t("team")}</th>
                  <th className="py-3 px-4 text-center">{t("played")}</th>
                  <th className="py-3 px-4 text-center">{t("won")}</th>
                  <th className="py-3 px-4 text-center">{t("drawn")}</th>
                  <th className="py-3 px-4 text-center">{t("lost")}</th>
                  <th className="py-3 px-4 text-center">{t("goalsFor")}</th>
                  <th className="py-3 px-4 text-center">{t("goalsAgainst")}</th>
                  <th className="py-3 px-4 text-center">{t("goalDiff")}</th>
                  <th className="py-3 px-4 text-center">{t("points")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredStandings.map((standing) => (
                  <tr key={standing.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold">{standing.position}</td>
                    <td className="py-3 px-4 font-medium">{standing.team}</td>
                    <td className="py-3 px-4 text-center">{standing.played}</td>
                    <td className="py-3 px-4 text-center">{standing.won}</td>
                    <td className="py-3 px-4 text-center">{standing.drawn}</td>
                    <td className="py-3 px-4 text-center">{standing.lost}</td>
                    <td className="py-3 px-4 text-center">
                      {standing.goalsFor}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {standing.goalsAgainst}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {standing.goalDifference}
                    </td>
                    <td className="py-3 px-4 text-center font-bold">
                      {standing.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <Button variant="default" className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-accent transition-colors">
              {t("viewAllStandings")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* Statistics Tab Content */}
        <TabsContent value="statistics" className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="statistics-category"
              className="block mb-2 font-medium"
            >
              {t("selectCategory")}
            </label>
            <Select
              value={statisticsCategory}
              onValueChange={(value) => setStatisticsCategory(value)}
            >
              <SelectTrigger className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder={t("cat2013")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2018">{t("cat2018")}</SelectItem>
                <SelectItem value="2017">{t("cat2017")}</SelectItem>
                <SelectItem value="2016">{t("cat2016")}</SelectItem>
                <SelectItem value="2015">{t("cat2015")}</SelectItem>
                <SelectItem value="2014">{t("cat2014")}</SelectItem>
                <SelectItem value="2013">{t("cat2013")}</SelectItem>
                <SelectItem value="2012">{t("cat2012")}</SelectItem>
                <SelectItem value="2011">{t("cat2011")}</SelectItem>
                <SelectItem value="2010">{t("cat2010")}</SelectItem>
                <SelectItem value="2009">{t("cat2009")}</SelectItem>
                <SelectItem value="2008">{t("cat2008")}</SelectItem>
                <SelectItem value="libre">{t("catLibre")}</SelectItem>
                <SelectItem value="mamafut">{t("catMamaFut")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goal Scorers */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                {t("goalScorers")}
              </h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-primary text-white uppercase text-sm">
                      <th className="py-3 px-4 text-left">{t("player")}</th>
                      <th className="py-3 px-4 text-left">{t("team")}</th>
                      <th className="py-3 px-4 text-center">{t("goals")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGoalScorers.map((scorer) => (
                      <tr key={scorer.id} className="hover:bg-gray-50 border-b">
                        <td className="py-3 px-4 font-medium">
                          {scorer.name}
                        </td>
                        <td className="py-3 px-4">{scorer.team}</td>
                        <td className="py-3 px-4 text-center font-bold">
                          {scorer.goals}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assists */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                {t("assists")}
              </h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-primary text-white uppercase text-sm">
                      <th className="py-3 px-4 text-left">{t("player")}</th>
                      <th className="py-3 px-4 text-left">{t("team")}</th>
                      <th className="py-3 px-4 text-center">{t("assists")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAssists.map((assist) => (
                      <tr key={assist.id} className="hover:bg-gray-50 border-b">
                        <td className="py-3 px-4 font-medium">
                          {assist.name}
                        </td>
                        <td className="py-3 px-4">{assist.team}</td>
                        <td className="py-3 px-4 text-center font-bold">
                          {assist.assists}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TournamentTabs;