import { useTranslation } from "@/lib/useTranslation";
import TournamentTabs from "@/components/TournamentTabs";
import { teams, matches, standings, goalScorers, assists } from "@/data/mockData";

const TeamsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
          {t("teamsScheduleTitle")}
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg">
          {t("teamsScheduleDescription")}
        </p>
      </div>

      <TournamentTabs
        teams={teams}
        matches={matches}
        standings={standings}
        goalScorers={goalScorers}
        assists={assists}
      />
    </div>
  );
};

export default TeamsSection;
