"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SecuritySettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Remember, your password is your digital key to your account. Keep it safe, keep it secure!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                defaultValue="testtest"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <EyeOff className="text-muted-foreground h-4 w-4" />
                ) : (
                  <Eye className="text-muted-foreground h-4 w-4" />
                )}
                <span className="sr-only">
                  {showCurrentPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                defaultValue="testtest"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="text-muted-foreground h-4 w-4" />
                ) : (
                  <Eye className="text-muted-foreground h-4 w-4" />
                )}
                <span className="sr-only">
                  {showNewPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm new password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                defaultValue="testtest"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="text-muted-foreground h-4 w-4" />
                ) : (
                  <Eye className="text-muted-foreground h-4 w-4" />
                )}
                <span className="sr-only">
                  {showConfirmPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>

          <Button className="ml-auto w-fit">Update</Button>
        </div>

        {/* <Separator /> */}

        {/* <div className="space-y-4"> */}
        {/*   <h3 className="text-lg font-semibold">2-Step verification</h3> */}
        {/*   <p className="text-muted-foreground text-sm"> */}
        {/*     Your account holds great value to hackers. Enable two-step verification to safeguard */}
        {/*     your account! */}
        {/*   </p> */}
        {/*   <div className="grid gap-4"> */}
        {/*     <div className="flex items-center justify-between"> */}
        {/*       <div className="flex items-center gap-3"> */}
        {/*         <Image */}
        {/*           src="https://bundui-images.netlify.app/avatars/08.png?height=24&width=24" */}
        {/*           alt="Google Authenticator" */}
        {/*           width={24} */}
        {/*           height={24} */}
        {/*         /> */}
        {/*         <div> */}
        {/*           <p className="font-medium">Google Authenticator</p> */}
        {/*           <p className="text-muted-foreground text-sm"> */}
        {/*             Using Google Authenticator app generates time-sensitive codes for secure logins. */}
        {/*           </p> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <Button */}
        {/*         variant="outline" */}
        {/*         className="border-green-200 bg-green-100 text-green-700 hover:bg-green-200"> */}
        {/*         Activated */}
        {/*       </Button> */}
        {/*     </div> */}
        {/*     <div className="flex items-center justify-between"> */}
        {/*       <div className="flex items-center gap-3"> */}
        {/*         <Image */}
        {/*           src="https://bundui-images.netlify.app/avatars/08.png?height=24&width=24" */}
        {/*           alt="Okta Verify" */}
        {/*           width={24} */}
        {/*           height={24} */}
        {/*         /> */}
        {/*         <div> */}
        {/*           <p className="font-medium">Okta Verify</p> */}
        {/*           <p className="text-muted-foreground text-sm"> */}
        {/*             Receive push notifications from Okta Verify app on your phone for quick login */}
        {/*             approval. */}
        {/*           </p> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <Button variant="outline">Enable</Button> */}
        {/*     </div> */}
        {/*     <div className="flex items-center justify-between"> */}
        {/*       <div className="flex items-center gap-3"> */}
        {/*         <Image */}
        {/*           src="https://bundui-images.netlify.app/avatars/08.png?height=24&width=24" */}
        {/*           alt="Email verification" */}
        {/*           width={24} */}
        {/*           height={24} */}
        {/*         /> */}
        {/*         <div> */}
        {/*           <p className="font-medium">E Mail verification</p> */}
        {/*           <p className="text-muted-foreground text-sm"> */}
        {/*             Unique codes sent to email for confirming logins. */}
        {/*           </p> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*       <Button variant="outline">Enable</Button> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </CardContent>
    </Card>
  );
}
