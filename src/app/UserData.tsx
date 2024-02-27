import React from 'react';

interface AthleteStats {
  all_ride_totals: Record<string, number>;
  all_run_totals: Record<string, number>;
  all_swim_totals: Record<string, number>;
  recent_ride_totals: Record<string, number>;
  recent_run_totals: Record<string, number>;
  recent_swim_totals: Record<string, number>;
}


interface UserDataProps {
  userData: {
    firstname: string;
    lastname: string;
    bio: string;
    sex: string;
    city: string;
    countryweight: string;
    username: string;
    profile: string;
    resource_state: number;
    weight?: number; 
    country?: string; 
  };
  athleteStats: AthleteStats;
}

const AthleteStatsComponent: React.FC<UserDataProps> = ({ athleteStats, userData }) => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
      };
  return (
    <div className="bg-gray-100 w-full md:w-4/5 h-auto md:h-3/5 rounded p-5 mt-5">
      <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold ml-4 mb-4">
        Athlete Stats
      </div>
      {athleteStats ? (
        <>
          <div className="flex justify-evenly">
            <div className="ml-6 flex flex-col gap-10">
              <div>
                <h3 className="text-md font-semibold mb-2">
                  All Ride Totals
                </h3>
                <ul className="list-disc pl-6">
                  {Object.entries(athleteStats.all_ride_totals).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">All Run Totals</h3>
                <ul className="list-disc pl-6">
                  {Object.entries(athleteStats.all_run_totals).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">
                  All Swim Totals
                </h3>
                <ul className="list-disc pl-6">
                  {Object.entries(athleteStats.all_swim_totals).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="ml-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-md font-semibold mb-2">
                    Recent Ride Totals
                  </h3>
                  <ul className="list-disc pl-6">
                    {Object.entries(athleteStats.recent_ride_totals).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-2">
                    Recent Run Totals
                  </h3>
                  <ul className="list-disc pl-6">
                    {Object.entries(athleteStats.recent_run_totals).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-2">
                    Recent Swim Totals
                  </h3>
                  <ul className="list-disc pl-6">
                    {Object.entries(athleteStats.recent_swim_totals).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default AthleteStatsComponent;
