import Header from "./Header";
// import FirstGoal from "./FirstGoal";
// import SecondGoal from "./SecondGoal";
// import ThirdGoal from "./ThirdGoal";
import GoalItem from "./GoalItem";

function GoalList() {
    return (
       <>
       <Header/>
       <ul>
         <GoalItem id="g1" title="Become A React Master !">Learn , Understand and be able to explain React in highly understandable way!</GoalItem>
         <GoalItem id="g2" title=" Practice !, Practice!!, Practice!!">Reading and learning is fun but you only master a topic when you work with it!. That is why I build a lot of projects that allows me to practice what I learnt!</GoalItem>
         <GoalItem id="g3" title="Get Paid Good Money for What I do ">As a developer , learning never ends. I want to ensure that I enjoy learning and I am motivated to 
            dive into Advanced React Concepts and also get paid good money for what I do.</GoalItem>
        </ul>
       </>
    )
}

export default GoalList;
