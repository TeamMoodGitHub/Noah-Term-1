import axios from 'axios'

export function relateSchoolPages (school, uid) {
  const schoolObj = {
    schoolName: school['school.name'],
    schoolAlias: school['school.alias'],
  }
  return axios.post(
    'http://ec2-52-206-6-143.compute-1.amazonaws.com/relatePages',
    {school: schoolObj, senderUid: uid})
}