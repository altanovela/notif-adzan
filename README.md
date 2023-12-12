# Adzan Notification

Bismillah, 

If you need Adzan Notification in your Channel (Slack, MsTeams, you can integrate more channel on the `notify` folder).
you can use this app,. it's build on top NodeJs and utilize Slack Webhook.
The prayer times source is based on Aladhan (https://aladhan.com/), you can add another sources by creating your own implementation, please see the sample in `times` folder.

It's already used in blanja.com Platform Dept.

Hopefully it will be useful for others.
Warm Regards

#### 1. Setup Channel Webhook

- Slack : 
Please follow this link to setup your [Slack Channel Webhook](https://slack.com/intl/en-id/help/articles/115005265063-Incoming-webhooks-for-Slack)

- MsTeams : 
Please follow this link to setup your [MsTeam Incoming Webhook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet)

#### 2. Integrate
Setup your channel Webhook URL, Country Location, City Location in the System Environment, or if using docker you can set the value in the [docker-compose.yml](deploy/docker-compose.yml#L7)

#### 3. Run the application
```
$ git clone https://github.com/altanovela/notif-adzan.git
$ cd notif-adzan
$ docker build --tag notif-adzan:1.0.0 .
$ docker-compose -f deploy/docker-compose.yml up -d
```
