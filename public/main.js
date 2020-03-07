const form = document.getElementById('vote-form');
var event;
form.addEventListener('submit', e=>{
    const choice = document.querySelector('input[name=os]:checked').value;
    const data = {os: choice};
    fetch('http://localhost:3100/poll',{
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .catch(err => console.log(err));
    e.preventDefault();
});
fetch("http://localhost:3100/poll")
    .then(res => res.json())
    .then(data => {
        let votes = data.votes;
        let totalVotes = votes.length;
        document.querySelector('#chartTitle').textContent = `Total Votes: ${totalVotes}`;
        let voteCounts = {
            Steak: 0,
            Shrimp: 0,
            Chicken: 0,
            Ribs: 0
        };
        voteCounts = votes.reduce((acc, vote) => (
            (acc[vote.os] = (acc[vote.os] || 0) + parseInt(vote.points)), acc),
            {}
        );
        let dataPoints = [
            { label: 'Steak', y: voteCounts.Steak },
            { label: 'Shrimp', y: voteCounts.Shrimp },
            { label: 'Chicken', y: voteCounts.Chicken},
            { label: 'Ribs', y: voteCounts.Ribs }
        ];
        const chartContainer = document.querySelector('#chartContainer');
        if(chartContainer){
            // Listen for the event.
            document.addEventListener('votesAdded', function (e) { 
                document.querySelector('#chartTitle').textContent = `Total Votes: ${e.detail.totalVotes}`;
            });
            const chart = new CanvasJS.Chart('chartContainer', {
                animationEnabled: true,
                theme: 'theme1',
                data:[
                    {
                        type: 'pie',
                        dataPoints: dataPoints
                    }
                ]
            });
            chart.render();
             // Enable pusher logging - don't include this in production
             //Pusher.logToConsole = true;
             var pusher = new Pusher('b1ebe92f7b945479d494', {
               cluster: 'us2',
               encrypted: true
             });
             var channel = pusher.subscribe('os-poll');
             channel.bind('os-vote', function(data) {
               dataPoints.forEach((point)=>{
                   if(point.label==data.os)
                   {
                        point.y+=data.points;
                        totalVotes+=data.points;
                        event = new CustomEvent('votesAdded',{detail:{totalVotes:totalVotes}});
                        // Dispatch the event.
                        document.dispatchEvent(event);
                   }
               });
               chart.render();
             });
        }
});