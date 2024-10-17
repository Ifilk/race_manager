export function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function perturbData(data, factor) {
    data.setFullYear(data.getFullYear() + Math.floor(factor * (1 + Math.random())));
    data.setMonth(data.getMonth() + Math.floor(factor * (1 + Math.random())));
    data.setDate(data.getDate() + Math.floor(factor * (1 + Math.random())));
    data.setHours(0);
    data.setMinutes(0);
    data.setSeconds(0);
    return data;
}

export function randomSponsor() {
    const sponsor = ['TSING_HUA',
        'PKU',
        'SJTU',
        'SUEP']

    return sponsor[Math.floor(Math.random() * sponsor.length)]
}

function randomArrayChip(array){
    let amount = Math.floor(1 + Math.random() * array.length);
    let m = array
    m.sort(function() {
        return (0.5-Math.random());
    });
    return [...Array(amount).keys()].map(i => m[i])
}


export function generateFakeMembers() {
    let uid_list = []
    let name_list = ['张三', '李四', '王五', '赵六', '刘七', '陈八']
    let member_list = name_list.map(r => {
        let uid = 'm' + generateRandomString(6);
        uid_list.push(uid);
        return {
            'uid': uid,
            'name': r
        }
    })
    return [member_list, uid_list]
}

export function generateFakeTeams(member_uid_list) {
    let team_list = []
    return [[...Array(Math.floor(Math.random() * member_uid_list.length))].map(_ => {
        let uid = 't' + generateRandomString(6);
        team_list.push(uid)
        return {
            'team_name': 'team_' + generateRandomString(3),
            'uid': uid,
            'affiliate': randomSponsor(),
            'apply_date': perturbData(new Date(), -10),
            'members': randomArrayChip(member_uid_list)
        }
    }), team_list];
}

export function generateFakeRace(team_uid_list) {
    return [...Array(Math.floor(Math.random() * team_uid_list.length))].map(_ => {
        let uid = 'r' + generateRandomString(6);
        let now = new Date();

        let apply_date = perturbData(now, -6).toISOString();
        let start_date = perturbData(now, 1).toISOString();
        let end_date = perturbData(now, 3).toISOString();

        let sponsor = randomSponsor();
        return {
            'uid': uid,
            'race_name': 'race_' + generateRandomString(3),
            'sponsor': sponsor,
            'start_date': start_date,
            'end_date': end_date,
            'apply_date': apply_date,
            'participants': [...randomArrayChip(team_uid_list)]
        }
    });
}

export function generateTestDate(){
    let [member_list, member_uid_list] = generateFakeMembers()
    let [team_list, team_uid_list] = generateFakeTeams(member_uid_list)
    let race_list = generateFakeRace(team_uid_list)

    return [member_list, team_list, race_list]
}

export function downloadJSON(object, name){
    let url = window.URL.createObjectURL(new Blob([JSON.stringify(object)], {
        type: 'application/json'
    }))
    let a = document.createElement('a');
    a.href = url
    a.download = name
    a.click();
}