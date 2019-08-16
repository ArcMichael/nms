#!/bin/bash
cd /mnt
echo $RUN_ENV

tee ./process.json <<-EOF
{
  "apps" : [{
    "script"    : "serve/server.bundle.js",
    "instances" : 0 ,
    "exec_mode" : "cluster",
    "env": {
      "NODE_PORT": 60019,
      "RUN_ENV": "${RUN_ENV}",
      "NODE_ENV": "production"
    }
  }]
}
EOF

pm2 dump && pm2 start process.json --no-daemon

# RUN_ENV : stage || production
# NODE_PORT: 60019