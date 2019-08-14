/*
 * @Author: lee
 * @Date:2019/8/4 20:27
 * @Last Modified by:lee
 * @Last Modified time:2019/8/4 20:27
 */

#include <iostream>
#include <cstring>
using namespace std;

struct edge {
    int from, to, cost;
};
const int INF = 0x3f3f3f3f;
const int V_MAX = 200; // 顶点的最大数目
const int E_MAX = 400; // 边的最大数目
const int Time_MAX = 10;
int V; // 顶点数
int E; // 边数
int s=0; // 起点
int C;
int sum = 0;
edge es[E_MAX];
int d[V_MAX];

void creat(int E) {
    for (int i = 0; i < E; ++i) {
        cin >> es[i].from >> es[i].to >> es[i].cost;
    }
}

void Bellman_Ford(int s) {
    fill(d, d + V, INF);
    d[s] = 0;

    while (true) {
        bool update = false;
        for (int i = 0; i < E; ++i) {
            edge e = es[i];
            if (d[e.from] != INF && d[e.to] > d[e.from] + e.cost) {
                d[e.to] = d[e.from] + e.cost;
                update = true;
            }
        }
        if (!update) break;
    }
}

bool find_negative_loop() {
    memset(d, 0, sizeof(d));

    for (int i = 0; i < V; ++i) {
        for (int j = 0; j < E; ++j) {
            edge e = es[j];
            if (d[e.to] > d[e.from] + e.cost) {
                d[e.to] = d[e.from] + e.cost;
                if (i == V - 1) return false;
            }
        }
    }
    return true;
}

void solve(int V,int E,int C) {
    creat(E);
    Bellman_Ford(s);
    sum = 0;
    int i;
    for (int j = 0; j < C; ++j)
    {
        cin >> i;
        sum+=d[i];
    }
    cout << sum << endl;

}

int main() {
    cin >> V >> E >> C;
    solve(V,E,C);
    //system("pause");
    return 0;
}
