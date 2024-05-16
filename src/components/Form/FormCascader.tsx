import React, { useState, useEffect } from "react";

interface FormCascaderProps {
  label: string;
  name: string;
  id: string;
  options: Record<string, string[]>;
  className?: string;
  selectedValue: { group: string; team: string };
  onGroupChange: (group: string) => void;
  onTeamChange: (team: string) => void;
}

const FormCascader = ({
  label,
  name,
  id,
  options,
  className,
  selectedValue,
  onGroupChange,
  onTeamChange,
}: FormCascaderProps) => {
  const [selectedGroup, setSelectedGroup] = useState(selectedValue.group || "");
  const [selectedTeam, setSelectedTeam] = useState(selectedValue.team || "");

  useEffect(() => {
    setSelectedGroup(selectedValue.group);
    setSelectedTeam(selectedValue.team);
  }, [selectedValue]);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const group = e.target.value;
    setSelectedGroup(group);
    setSelectedTeam("");
    onGroupChange(group);
    onTeamChange("");
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const team = e.target.value;
    setSelectedTeam(team);
    onTeamChange(team);
  };

  const groupOptions = Object.keys(options);
  const teamOptions = selectedGroup ? options[selectedGroup] : [];

  return (
    <div
      className={`sf-pro-display relative mx-auto mb-5 flex flex-col text-xl ${className}`}
    >
      <label htmlFor={name} className="mb-[13px] font-semibold">
        {label}
      </label>
      <select
        name={`${name}_group`}
        id={`${id}_group`}
        value={selectedGroup}
        onChange={handleGroupChange}
        className="w-full appearance-none rounded-[5px] border border-[#B2B2B2] bg-white px-[18px] py-[13px] text-xl focus:outline-none"
      >
        <option value="" disabled>
          Select Group
        </option>
        {groupOptions.map((group, index) => (
          <option key={index} value={group} className="bg-[#9E9E9E] text-white">
            {group}
          </option>
        ))}
      </select>
      {teamOptions && teamOptions.length > 0 && (
        <select
          name={`${name}_team`}
          id={`${id}_team`}
          value={selectedTeam}
          onChange={handleTeamChange}
          className="mt-4 w-full appearance-none rounded-[5px] border border-[#B2B2B2] bg-white px-[18px] py-[13px] text-xl focus:outline-none"
        >
          <option value="" disabled>
            Select Team
          </option>
          {teamOptions.map((team, index) => (
            <option
              key={index}
              value={team}
              className="bg-[#9E9E9E] text-white"
            >
              {team}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FormCascader;
