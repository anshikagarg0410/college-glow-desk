// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { LogIn, Eye, EyeOff } from "lucide-react";
// import { toast } from "sonner";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     remember: false
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle login logic here
//     toast.success("Login functionality will be implemented with backend integration");
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
//         <Card className="w-full max-w-lg p-8">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
//               <LogIn className="h-8 w-8 text-primary-foreground" />
//             </div>
//             <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
//             <p className="text-muted-foreground">Sign in to access your study resources</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   required
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                 </Button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Checkbox
//                   id="remember"
//                   checked={formData.remember}
//                   onCheckedChange={(checked) => 
//                     setFormData({ ...formData, remember: checked as boolean })
//                   }
//                 />
//                 <Label htmlFor="remember" className="text-sm">Remember me</Label>
//               </div>
//               <Link to="/forgot-password" className="text-sm text-primary hover:underline">
//                 Forgot password?
//               </Link>
//             </div>

//             <Button type="submit" className="w-full" size="lg">
//               <LogIn className="h-5 w-5 mr-2" />
//               Sign In
//             </Button>
//           </form>

//           <div className="mt-8 text-center">
//             <p className="text-muted-foreground">
//               Don't have an account?{" "}
//               <Link to="/signup" className="text-primary hover:underline font-medium">
//                 Sign up here
//               </Link>
//             </p>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-10 p-4">
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        <Card className="w-full max-w-sm bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your details to access your account.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Login form goes here */}
            <p className="text-gray-500 mt-4 text-center">Login functionality is coming soon.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;