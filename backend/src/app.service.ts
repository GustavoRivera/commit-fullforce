import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

//Added authentication token from Github
const octokit = new Octokit({
  auth: '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'
})

@Injectable()
export class AppService {
  async getCommits():Promise<String>{

    //Accesing Github API repo "commit-fullforce" getting commits
    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: 'GustavoRivera',
      repo: 'commit-fullforce',
    }).then(res => {
      return res.data})

    const stringnew = new Promise<String>((resolve, reject) => {resolve(JSON.stringify(response))})
    return stringnew;
  }
}
