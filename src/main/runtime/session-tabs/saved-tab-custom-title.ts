import type { WorkspaceSessionState } from '../../../shared/workspace-session-state-types'

/**
 * The name for a mobile row built from a terminal that was (re)started for a saved tab.
 * The row's own value wins, including `null` (the name was cleared); only a row with no value
 * falls back to the tab's saved name. After a restart no earlier mobile row carries the name,
 * so without this the phone shows only the terminal's own title.
 */
export function tabCustomTitle(
  rowCustomTitle: string | null | undefined,
  session: WorkspaceSessionState | null | undefined,
  worktreeId: string,
  tabId: string
): string | null | undefined {
  if (rowCustomTitle !== undefined) {
    return rowCustomTitle
  }
  return (
    session?.tabsByWorktree[worktreeId]?.find((tab) => tab.id === tabId)?.customTitle?.trim() ||
    undefined
  )
}
