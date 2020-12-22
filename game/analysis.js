const analysis_text = `
Besides the title and the publisher, this table presents the mechanics used in each proposal. As such, we can list the Stackelberg game, evolutionary and cooperative. Some approaches combined game mechanics with others to solve different issues. For example, 5 used blockchain to solve model security issues, while 10 used differential games to solve privacy issues. Finally, 8 used contract theory to address free-riding attacks.


As for incentive, we already analyzed the works in this area, so we won't go through all of it again. Briefly, incentives try to attract participants by distributing rewards based on their contribution to the global model. in these works, the contributions are calculated based on the resulting cost of participant's selected strategy and focus on the computation cost and the data size. These works believe that an increase in data quantity improves the final model's total accuracy; however, one of the papers that emphasize contribution in federated learning mentioned that the data quantity isn't enough to calculate participant contribution.
To make the idea clear, let's take a look at table 1. This table presents features in columns and the data contribution of each participant in each row. If we follow the traditional approaches to contribution calculation, participants p1 can be easily considered as the one with the minimum contribution. However, in reality, based on each feature's impact, the model provided by this participant would be a turning point in the accuracy of the final model and thus would not be completed without it.

Such a scenario hasn't been widely considered in federated learning. As of late, two works focus on such aspects. These works are marked under the contribution calculation  6 and 10. These studies present two ways to calculate the contribution of participants. The first one is through deletion, where we delete a model instance and build the global model anew and calculate the difference of accuracy. The other way is through shapely value, which calculates the features' contribution to the global model. This method can address the problem I presented in table 1, where this feature impact is identified, and the participants' contribution is calculated based on this value.
Calculating contribution could revolutionize the way we reward participants, and this area isn't considered yet. Current studies focus on providing only contribution calculation methods.
However, these approaches have significant limitations. For example, considering a standard federated learning architecture as in figure 1, after the participants train the model and send it to the server, the server now has zero knowledge of the data used to train the model. Considering shapely value or deletion methods, previous knowledge of the model's data is required to calculate the contribution and to test the newly built models' accuracy. To solve this issue, the server needs to send the model back to participants each time, which requires an additional communication cost and exponentially increases server loads. For example, model deletion required multiple iterations equal to the number of participants in each round.

Studies considered these issues provide middlewares that collect data to test the collected models' accuracy. For example, in figure 2, the middlewares are roadside units that collect surrounding data on their own to test models received from vehicles. However, such an approach can't always be applied because cases exist where the middlewares cannot collect the required data. For example, a stationed middleware has to test models related to mobility. Another approach to these issues is considered as a part of blockchain federated learning by exploiting consensus mechanism. Such an approach is displayed in figure 3. As you can notice, the model is initialized on the miner and transferred to another miner. As such, an older model's accuracy can be calculated on a different dataset collected from another source until it finally reaches the final node and builds the global model. The drawback of this architecture is that it could take a long time to finish, mainly if one node hangs or takes too much time in the training procedure.

Moving from contribution to communication cost, it isn't considered a part of game theory as much of it can be solved using a more specialized approach. However, some games proposed the communication cost of part of their formation to calculate the incentives.

Resource Allocation implies any paper that mentioned the computational cost of creating models in the game formation. This area is widely used, and most of the incentive mechanism depends on it for incentive allocations.

Maliciousness isn't considered well in federated learning. Even when mentioned, it was solved using an approach bundled with game theory rather than solving it using the game formulation itself. For example, in 5, the authors address the data and model poisoning attack through blockchain architecture. While in 8, the authors address free-riding attacks by employing a contract theory model.

Finally, Federated Architecture can be considered an essential characteristic while analyzing approaches in federated learning. Figure 4 shows the differences between horizontal and vertical fl architecture. In simple terms, in horizontal fl, both participants have the same features while training models. However, in vertical fl, clients complete each other features rather than having similar ones.
Most of the studies considered the existence of the data as it follows horizontal architecture. However, such an assumption is proven wrong. for example, in figure 5, we compare an iid and non-iid dataset. We can definitely recognize that working on non-iid reduces the model's accuracy in each round and increase the time needed to reach the convergence.

To summarize what we've learned from this table.
We know that quantity isn't as significant as the impact of the model features collected from participants. Calculating model contributions are still immature as many problems have to be addressed; for example, the lack of training data to validate the contributions. However, the consensus mechanism of a blockchain architecture can be used as a solution. In a blockchain, the ledger is shared with all the nodes in the network. Thus, similar nodes can easily access ledger models and validate their contribution through the collected data.
Working on contribution would also open a new path for game theory models addressing malicious participants. The calculated contribution can be considered the main feature for frameworks built to calculate incentives or as an initial setup for participant selection.
`

const point0 = `
    <ul>
        <li>Mechanics Employed</li>
        <li>Stackelberg game, evolutionary and cooperative</li>
        <li>Combined different mechanics to solve security and privacy issues</li>
    </ul>`

const point1 = `
    <ul>
        <li>Attract participants by distributing rewards</li>
        <li>Contributions are calculated based participant's selected strategy and includes computation cost and data size</li>
        <li>Increase in data quantity improves the final model's total accuracy</li>
        <li><b>Data quantity isn't enough to calculate participant contribution</b></li>
    </ul>
`

const point21 = `
    <ul>
        <li>Scenario such as in table 1 hasn't been widely considered in federated learning</li>
        <li>These studies present two ways to calculate the contribution of participants</li>
        <li><b>DELETION</b>: delete a model instance and build the global model anew and calculate the difference of accuracy</li>
        <li><b>SHAPELY VALUE</b>: calculates the features' contribution to the global model (solution for table 1 issue)</li>
        <li>Calculating contribution could revolutionize the way we reward participants, and this area isn't considered yet. </li>
    </ul>
`


const point22 = `
    <ul>
        <li><b>Limitation: lacking data for validation in real life scenario</b></li>
        <li>Solution: send the model back to participants to calculate contributions</li>
        <li>Solution: middlewares that collect data to test the collected models' accuracy</li>
    </ul>
    `

const point3 = `
    <ul>
        <li>Communication cost can be addressed by employing a more specialized approaches</li>
        <li>Incentive mechanism depends on communication cost for incentive allocations</li>
        <li>Resource Allocation = any paper that mentioned the computational cost of creating models in the game formation</li>
        <li>Incentive mechanism depends on it for incentive allocations. </li>
    </ul>
`

const point4 = `
    <ul>
        <li>Maliciousness studies are lacking well in theoretical game federated learning.</li>
        <li><button onclick="javascript:document.documentElement.scrollTop = 0;"   class="btn">Go To Table</button> To check the papers</li>
    </ul>
`

const point5 = `
    <ul>
        <li>Quantity isn't as significant as the impact of the model features collected from participants</li>
        <li>Calculating model contributions are still immature</li>
        <li>Utilise blockchain consesus mechanism to solve contribution lack of data for validation</li>
        <li>Contribution calculation open the path for game theory models addressing malicious participants and participants selection.</li>
    </ul>
`