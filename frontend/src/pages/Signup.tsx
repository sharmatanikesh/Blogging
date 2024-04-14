import { AuthSignup } from "../components/AuthSignup";
import { Quotes } from "../components/Quotes";

export const Signup = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
        <AuthSignup/>
        </div>
        <div className="hidden lg:block">
        <Quotes/>
        </div>
          
      </div>
     
    );
  }