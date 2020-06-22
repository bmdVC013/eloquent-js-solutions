/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
const HASH = "#";
let totalHash = "";
const CALLS = 8;
for (let i = 1; i < CALLS; i++) {
  totalHash = totalHash.concat(HASH);
  console.log(totalHash);
}