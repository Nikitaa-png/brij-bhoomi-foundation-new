import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, KeyRound, Mail, AlertCircle, Eye, EyeOff, UserPlus } from "lucide-react";
import PageMeta from "../../components/common/PageMeta";

export default function VolunteerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If already logged in, redirect straight to dashboard
    if (localStorage.getItem("brij_volunteer_session")) {
      navigate("/volunteer/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (email === "volunteer@brijbhoomi.org" && password === "volunteer123") {
        localStorage.setItem("brij_volunteer_session", "true");
        if (rememberMe) {
          localStorage.setItem("brij_volunteer_remember", email);
        } else {
          localStorage.removeItem("brij_volunteer_remember");
        }
        setIsLoading(false);
        navigate("/volunteer/dashboard", { replace: true });
      } else {
        setIsLoading(false);
        setErrorMsg("Invalid credentials. Try volunteer@brijbhoomi.org / volunteer123.");
      }
    }, 600);
  };

  return (
    <>
      <PageMeta
        title="Volunteer Login - Brij Bhoomi Foundation"
        description="Access the volunteer portal, log active hours, and review registered cleanup drives."
      />

      <div className="min-h-screen text-[#111111] font-inter flex flex-col justify-center items-center px-4 relative select-none overflow-hidden">
        {/* Blurred Background Image related to the foundation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[4px] scale-[1.05] z-0"
          style={{ backgroundImage: "url('/eco_volunteers.png')" }}
        ></div>
        {/* Mission and Vision tint overlay */}
        <div className="absolute inset-0 bg-[#F2E8D6]/75 z-10"></div>
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280] hover:text-[#8B6F47] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8B6F47] rounded p-1 z-20"
        >
          <ArrowLeft size={14} /> Back to Website
        </Link>

        {/* Card Container */}
        <div className="w-full max-w-md bg-[#FCFAF5] border border-[#D8C6A8]/70 rounded-[16px] p-8 shadow-lg space-y-6 z-20 relative">
          
          {/* Logo Branding */}
          <div className="text-center space-y-2">
            <Link to="/" className="flex flex-col items-center group mb-2">
              <span className="text-lg md:text-xl font-sora font-semibold tracking-tight text-[#111111] leading-none transition-colors duration-300 group-hover:text-[#8B6F47]">
                BRIJ BHOOMI
              </span>
              <span className="text-[7px] uppercase tracking-[0.3em] text-[#8B6F47] font-semibold mt-0.5 transition-colors duration-300 group-hover:text-[#111111]">
                Foundation
              </span>
            </Link>
            <span className="text-[9px] font-sora font-semibold tracking-widest text-[#8B6F47] uppercase bg-[#F2E8D6] px-2.5 py-0.5 rounded-[4px] inline-block">
              VOLUNTEER HUB
            </span>
            <h1 className="text-xl font-sora font-semibold text-[#111111] tracking-tight pt-2">Volunteer Portal Login</h1>
            <p className="text-[11px] text-[#6B7280] font-medium">Log contribution hours, check schedules, and verify certificates.</p>
          </div>

          {/* Validation Alert */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-800 text-[11px] px-4 py-3 rounded-lg flex items-start gap-2.5 animate-in fade-in duration-300 text-left">
              <AlertCircle size={15} className="text-red-600 mt-0.5 shrink-0" />
              <span className="leading-relaxed">{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
            
            {/* Email Field */}
            <div className="space-y-1">
              <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  type="email"
                  required
                  placeholder="volunteer@brijbhoomi.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47] text-xs text-[#111111] transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="block text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Password</label>
                <button
                  type="button"
                  onClick={() => alert("Credentials verification help: Check password 'volunteer123'")}
                  className="text-[9px] text-[#8B6F47] hover:underline font-semibold"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <KeyRound size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 border border-[#D8C6A8]/60 bg-white rounded-lg focus:outline-none focus:border-[#8B6F47] text-xs text-[#111111] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#111111]"
                >
                  {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-[#6B7280] font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 text-[#8B6F47] accent-[#8B6F47] rounded border-[#D8C6A8]/60 focus:ring-0 cursor-pointer"
                />
                <span>Remember this computer</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#111111] text-white text-[11px] font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#8B6F47] active:scale-[0.98] transition-all disabled:opacity-50 mt-2 flex justify-center items-center"
            >
              {isLoading ? "Signing In..." : "Sign In to Portal"}
            </button>

          </form>

          {/* New Volunteer Redirect Link */}
          <div className="pt-4 border-t border-[#D8C6A8]/20 flex flex-col items-center gap-3">
            <span className="text-[10px] text-[#6B7280] font-medium">New to Brij Bhoomi Foundation?</span>
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#8B6F47] uppercase tracking-wider hover:underline"
            >
              <UserPlus size={13} /> Register as a Volunteer
            </Link>
          </div>

          {/* Helper instructions in UI for demo */}
          <div className="pt-3.5 border-t border-[#D8C6A8]/10 text-[10px] text-[#6B7280] text-center font-medium leading-relaxed">
            Demo Details:<br />
            Email: <span className="text-[#111111] font-bold">volunteer@brijbhoomi.org</span><br />
            Password: <span className="text-[#111111] font-bold">volunteer123</span>
          </div>

        </div>
      </div>
    </>
  );
}
