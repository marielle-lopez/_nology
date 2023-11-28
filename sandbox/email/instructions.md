touch ./inbox/new-email.txt
mv ./inbox/new-email.txt ./junk
touch ./outbox/another-email.txt && cp ./outbox/another-email.txt ./inbox && mv ./outbox/another-email.txt ./junk
