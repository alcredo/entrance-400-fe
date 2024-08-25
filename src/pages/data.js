const STAFF_DATA = [
    {
        id: '11040016960680',
        name: 'Mohammad Zainollah, S.Hub.Int., M.M.',
        unit: 'Inf',
        grade: 'Letkol'
    },
    {
        id: '11090017900886',
        name: 'Agus Fahruddin',
        unit: 'Inf',
        grade: 'Mayor'
    },
    {
        id: '11120007971189',
        name: 'Eko Hadi Syahputra, S.IP',
        unit: 'Inf',
        grade: 'Kapten'
    },
    {
        id: '11210005490495',
        name: 'dr. Ridho Viandalas',
        unit: 'Ckm',
        grade: 'Letda'
    },
    {
        id: '21020187240483',
        name: 'Likuisa Kartika P',
        unit: 'Inf',
        grade: 'Letda'
    },
    {
        id: '21060138460885',
        name: 'Santoso',
        unit: 'Chb',
        grade: 'Letda'
    },
    {
        id: '21080696480586',
        name: 'Ayub Atmiyanto',
        unit: 'Ckm',
        grade: 'Letda'
    }
];

export const findData = (id) => {
    const staff = STAFF_DATA.find((data) => data.id === id);

    if (staff) return staff;

    return null;
}