---
sidebar_position: 4
---

# Team Pro

The Team Pro plan includes all features of the Pro Plan, plus:

- Admin dashboard access
- License management
- Members management
- Unified billing
- User-level feature access
- RapidGPT resources allocation

## Team Pro Plan Setting

To configure the Team Pro subscription, users need to provide the company name and select the desired number of seats for the subscription. The plan price is calculated based on the chosen number of seats.

Users can then select the billing frequency, choosing between monthly or annual billing cycles.

![](/img/portal-guide/team-pro-plan-setting.png)

After selecting the billing frequency, users must check the checkbox to agree to the terms and conditions before proceeding to payment by clicking "Continue to Payment."

Users will be directed to a third-party payment gateway (Stripe) to complete the transaction.

![](/img/portal-guide/payment-team-plan.png)

Upon successful payment verification, users will receive a welcome email and gain access to the members page.

<div className="t-center">
![](/img/portal-guide/welcome-teampro-email.png)
</div>

## Members

The Members page is accessible to the owner and admins of the Team Pro subscription.

The owner is the user who has paid for the subscription and has access to payment and billing details. The owner holds all admin privileges.

Admins have access to the Members page and can manage various aspects, including member management, inviting new members, suspending or removing users, and performing other administrative tasks.

A user can be an admin for multiple companies. From the dropdown menu, users can select their company and manage members accordingly.

![](/img/portal-guide/members.png)

## Invite Members

Owners and admins can invite members by using the "Invite Member" button. They can enter email addresses individually or import a CSV file containing multiple email addresses.

![](/img/portal-guide/invite-members.png)

Members who accept the invitation will receive their API key upon logging in to the portal.

## Members Status Tabs

Members are categorized into three tabs based on their status:
**Active Users:** Displays members who have accepted their invitations and currently have active API keys. 
**Pending Invites:** Shows members who have been invited but have not yet accepted the invitation. 
**Suspended Users:** Lists members who have been suspended and do not currently have API keys.

## Active Users

Members who have accepted the invitation are listed in the "Active Users" tab. The Owner or Admin can manage these members by changing their roles, removing users, or revoking licenses by clicking the more options icon.

<div className="t-center">
![](/img/portal-guide/active-users.png)
</div>

**Change Role:**

An Admin can modify the role of an active user to either Admin or a regular member and vice versa.

<div className="t-center">
![](/img/portal-guide/change-role.png)
</div>

**Remove User:**

Selecting this option removes the user from the subscription, effectively revoking their access and privileges.

**Revoke License:**

The "Revoke License" option provides two choices:
-	**Now:** This option immediately revokes the user's license.
-	**On Renewal Date:** This option keeps the user’s license active until the renewal date. After this date, the license is automatically suspended.

## Pending Invites
Pending invitations are listed in the **"Pending Invites"** tab. Owners and admins can edit, resend, or cancel these invitations

## Suspended Users

Users with suspended licenses are listed in the **"Suspended Users"** tab, where Owner/Admin can remove or restore user.

## Owner/Admin API Key Management


The Owner or Admin can obtain their API key by clicking **"GET API key"**.

To leave their license, the Owner can click **"Drop API key"**. This action will remove the license for the Owner/Admin from the active tab and delete the API key from their dashboard.

## Invite Notification Banner

Upon receiving an invite email, the user should log in to the portal. After logging in, the user will see an invitation banner on the dashboard. From this banner, the user can accept or reject the invitation.

<div className="t-center">
![](/img/portal-guide/invitation.png)
</div>

![](/img/portal-guide/join-invitation.png)

On accepting the invite user will get the API key.


![](/img/portal-guide/api-key-copy.png)
