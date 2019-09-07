#!/bin/bash

tee ./process.json <<-EOF
{
  "apps": [
    {
      "name": "next",
      "script": "./dist/app.js",
      "instances": 2,
      "exec_mode": "cluster",
      "instance_var": "INSTANCE_ID"
    }
  ]
}
EOF

npm run build && npx pm2 dump && npx pm2 start process.json

tail -f /opt/frontend/dockerlogs/app.log