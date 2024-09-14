import React, { useState } from 'react';
import { Rocket, Cpu, Users, FileCheck, MessageSquare, Group, Bot, Award, Search, ChevronDown } from 'lucide-react';
import ChallengeForm from './ChallengeForm'; 
import EditChallenge from './EditChallenge'; // Import the EditChallenge component
import cardImage from './cardimage.png';  

const AIChallengeDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null); // State to track the selected challenge

  // Handler to toggle the form
  const handleCreateChallengeClick = () => {
    setShowForm(true);
  };

  // Handler for "Participate Now" button click
  const handleParticipateClick = (challenge) => {
    setSelectedChallenge(challenge); // Set the selected challenge to be edited
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {showForm ? (
          <ChallengeForm />
        ) : selectedChallenge ? (
          // Render EditChallenge if a challenge is selected
          <EditChallenge challenge={selectedChallenge} />
        ) : (
          // Render the Dashboard content if no challenge is selected
          <>
            <div className="bg-[#0a2a3a] rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between">
                <div className="max-w-xl">
                  <h1 className="text-4xl font-bold mb-4">
                    Accelerate Innovation with Global AI Challenges
                  </h1>
                  <p className="text-gray-300 mb-6">
                    AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                  </p>
                  <button
                    onClick={handleCreateChallengeClick}
                    className="bg-white text-blue-900 font-semibold py-2 px-4 rounded"
                  >
                    Create Challenge
                  </button>
                </div>
                <div className="hidden md:block">
                  <Rocket size={120} className="text-green-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <StatCard icon={<Cpu />} value="100K+" label="AI model submissions" />
              <StatCard icon={<Users />} value="50K+" label="Data Scientists" />
              <StatCard icon={<FileCheck />} value="100+" label="AI Challenges hosted" />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Why Participate in <span className="text-green-400">AI Challenges</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ReasonCard
                  icon={<MessageSquare className="text-green-400" />}
                  title="Prove your skills"
                  description="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
                />
                <ReasonCard
                  icon={<Group className="text-green-400" />}
                  title="Learn from community"
                  description="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
                />
                <ReasonCard
                  icon={<Bot className="text-green-400" />}
                  title="Challenge yourself"
                  description="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
                />
                <ReasonCard
                  icon={<Award className="text-green-400" />}
                  title="Earn recognition"
                  description="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
                />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Explore Challenges</h2>
              <div className="flex justify-between items-center mb-6">
                <div className="relative flex-grow mr-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-white text-gray-900 rounded-full py-2 px-4 pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
                </div>
                <button className="bg-white text-gray-900 rounded-full py-2 px-4 flex items-center">
                  Filter <ChevronDown className="ml-2" size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ChallengeCard
                  image={cardImage}
                  status="Upcoming"
                  title="Data Science Bootcamp - Graded Datathon"
                  timeLeft="00 : 15 : 22"
                  timeType="Starts in"
                  onClick={() => handleParticipateClick("Data Science Bootcamp - Graded Datathon")} // Pass challenge to handleParticipateClick
                />
                <ChallengeCard
                  image={cardImage}
                  status="Upcoming"
                  title="Data Sprint 72 - Butterfly Identification"
                  timeLeft="00 : 12 : 34"
                  timeType="Starts in"
                  onClick={() => handleParticipateClick("Data Sprint 72 - Butterfly Identification")} // Pass challenge to handleParticipateClick
                />
                <ChallengeCard
                  image={cardImage}
                  status="Active"
                  title="Data Sprint 71 - Weather Recognition"
                  timeLeft="01 : 17 : 10"
                  timeType="Ends in"
                  onClick={() => handleParticipateClick("Data Sprint 71 - Weather Recognition")} // Pass challenge to handleParticipateClick
                />
                <ChallengeCard
                  image={cardImage}
                  status="Active"
                  title="Data Sprint 70 - Passenger Satisfaction"
                  timeLeft="00 : 11 : 27"
                  timeType="Ends in"
                  onClick={() => handleParticipateClick("Data Sprint 70 - Passenger Satisfaction")} // Pass challenge to handleParticipateClick
                />
                <ChallengeCard
                  image={cardImage}
                  status="Past"
                  title="Engineering Graduates Employment Outcomes"
                  timeLeft="16May'22 09:00PM"
                  timeType="Ended on"
                  onClick={() => handleParticipateClick("Engineering Graduates Employment Outcomes")} // Pass challenge to handleParticipateClick
                />
                <ChallengeCard
                  image={cardImage}
                  status="Past"
                  title="Travel Insurance Claim Prediction"
                  timeLeft="16May'22 09:00PM"
                  timeType="Ended on"
                  onClick={() => handleParticipateClick("Travel Insurance Claim Prediction")} // Pass challenge to handleParticipateClick
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 flex items-center">
      <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
        {React.cloneElement(icon, { size: 24, className: "text-white" })}
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </div>
  );
};

const ReasonCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-5 rounded-lg p-6">
      <div className="mb-4">
        {React.cloneElement(icon, { size: 36 })}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ChallengeCard = ({ image, status, title, timeLeft, timeType, onClick }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
          status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
        <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
        <div className="text-gray-600 text-sm mb-4">
          <p>{timeType}</p>
          <p className="font-bold">{timeLeft}</p>
          <p className="text-xs">Days Hours Mins</p>
        </div>
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded-full w-full hover:bg-green-600 transition-colors"
          onClick={onClick} // Call the onClick prop when button is clicked
        >
          Participate Now
        </button>
      </div>
    </div>
  );
};

export default AIChallengeDashboard;
