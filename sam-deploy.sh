#!/bin/sh

if [ -z "$SAM_BUCKET" ] || [ -z "$SAM_STACK_NAME" ]
then
  echo "usage: SAM_BUCKET=bucket_name SAM_STACK_NAME=stack_name sam-delpoy.sh"
  exit 1
fi

sam package --template-file sam/template.yml --output-template-file sam/output.yml --s3-bucket $SAM_BUCKET
echo y | sam deploy --template-file sam/output.yml --capabilities CAPABILITY_IAM --stack-name $SAM_STACK_NAME
