import React from 'react';
import Image from 'next/image';

const ScheduleTable = () => {
  const defaultTable = [
    {
      title: 'Social Media Posts',
      pic: 'PIC',
      status: 'Done',
      priority: 'High',
      tags: ['#tag'],
    },
    {
      title: 'Social Media Interviews',
      pic: 'PIC',
      status: 'Awaiting Review',
      priority: 'Low',
      tags: ['#product', '#design'],
    },
    {
      title: 'Getter done stuff',
      pic: 'PIC',
      status: 'Working on it',
      priority: 'Medium',
      tags: ['#content', '#analyst'],
    },
  ];

  return (
    <div className="table-container">
      <table className="table text-yellow-950">
        <thead>
          <tr className="tr">
            <th className="th-title align-bottom row-title">This month</th>
            <th className="align-bottom owner">Owner</th>
            <th className="align-bottom selector-box">Status</th>
            <th className="align-bottom selector-box">Priority</th>
            <th className="align-bottom tag-box">Tag</th>
            <th className="relative object-contain">
              <a className="add-icon">
                <Image
                  src="/plusIcon.svg"
                  alt="add icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </th>
          </tr>
        </thead>
        <tbody className="tb">
          {defaultTable.map((row, idx) => (
            <tr className="tr text-center" key={idx}>
              <td className="text-left bg-slate-100 inline-flex row-title">
                <div className="left-tab"></div>
                <div className="pl-2">{row.title}</div>
              </td>
              <td className="bg-slate-100 owner">
                <div className="">{row.pic}</div>
              </td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.priority}</td>
              <td className="bg-slate-100 tag-box">{row.tags}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
              <td className="selector-box">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
