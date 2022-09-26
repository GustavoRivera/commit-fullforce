import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

//Added authentication token from Github
const octokit = new Octokit({
  auth: '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'
})

@Injectable()
export class AppService {
  async getCommits():Promise<String>{

    //Accesing Github API repo "commit-fullforce" getting branches
    const response = await octokit.request('GET /repos/{owner}/{repo}/branches', {
      owner: 'GustavoRivera',
      repo: 'commit-fullforce',
    }).then(res => {
      return res.data})


    // //Accesing Github API repo "commit-fullforce" getting branches
     let branchesCommits = []
     for(let i = 0; i < response.length; i ++){
      console.log(response[i].name)
        await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
           owner: 'GustavoRivera',
           repo: 'commit-fullforce',
           branch: `${response[i].name}`
         }).then(res => { branchesCommits.push(res.data)})
     }
    //  console.log(branchesCommits);

    const stringnew = new Promise<String>((resolve, reject) => {resolve(JSON.stringify(branchesCommits))})
    return stringnew;
  }
}
