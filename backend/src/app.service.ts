import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
@Injectable()
export class AppService {
  async getCommits():Promise<String>{
    const octokit = new Octokit({
      auth: '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'
    })

    const response = await octokit.request('GET /repos/{owner}/{repo}/branches', {
      owner: 'GustavoRivera',
      repo: 'commit-fullforce'
    }).then(res => {return res.data[0]})
    const stringnew = new Promise<String>((resolve, reject) => {resolve(JSON.stringify(response))})
    return stringnew;
  }
}
