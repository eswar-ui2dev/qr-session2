import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          


          <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground">

          </h1>
          <p className="text-muted-foreground text-sm">
            Smart attendance tracking for modern classrooms
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/teacher/login")}
            className="group flex w-full items-center gap-4 border border-border bg-card p-5 text-left shadow-sm transition-all hover:shadow-md hover:border-primary/30 hover:bg-accent rounded-full">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:scale-105 rounded-full">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="font-heading font-semibold text-card-foreground">Teacher</p>
              <p className="text-sm text-muted-foreground">Start sessions & view analytics</p>
            </div>
          </button>

          <button
            onClick={() => navigate("/student")}
            className="group flex w-full items-center gap-4 border border-border bg-card p-5 text-left shadow-sm transition-all hover:shadow-md hover:border-primary/30 hover:bg-accent rounded-full">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary text-secondary-foreground transition-transform group-hover:scale-105 rounded-full">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="font-heading font-semibold text-card-foreground">Student</p>
              <p className="text-sm text-muted-foreground">Check in to active sessions</p>
            </div>
          </button>
        </div>
      </div>
    </div>);

};

export default Index;