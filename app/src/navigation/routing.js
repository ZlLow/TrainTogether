import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Login from "../pages/login/Login"
import NotFound from "../pages/error/NotFound";
import Register from "../pages/register/Register"
import Forget from "../pages/login/Forget";
import Facilities from "../pages/facilities/Facilities";
import Verify from "../pages/register/Verify";
import Profile from "../pages/profile/Profile";
import ExercisePlan from '../pages/exerciseplan/ExercisePlan';
import ExerciseCarousel from '../pages/exercisecarousel/ExerciseCarousel';
import Exercise from '../pages/exercise/Exercise';
import Workout from '../pages/workout/Workout';
import ScheduleExercise from '../pages/scheduleExercise/ScheduleExercise';

function Routing() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<Profile/>}/>
                <Route path="/facilities" element={<Facilities/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}>
                    <Route path="otp" element={<Verify/>}/>
                </Route>
                <Route path="profile" element={<Profile/>}/>
                <Route path="password">
                    <Route path="forget" element={<Forget/>}/>
                </Route>
                <Route path="workout" element={<Workout/>}/>
                <Route path="workout/schedule-exercise" element={<ScheduleExercise/>}/>
                <Route path="workout/exerciseplan" element={<ExercisePlan/>}/>
                <Route path="workout/exerciseview" element={<ExerciseCarousel/>}/>     
                <Route path="workout/exerciseview/exercise" element={<Exercise/>}/>       
                <Route path="*" element={<NotFound/>}/>
           </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing;